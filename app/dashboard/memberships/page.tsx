import { AppSidebar } from "@/components/app-sidebar";
import { MembershipDetailTrigger } from "@/components/admin/membership-detail-trigger";
import { MembershipRowActions } from "@/components/admin/membership-row-actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import { db } from "@/lib/prisma";

export default async function MembershipRequestsPage() {
  const session = await requireAdminPage();
  const memberships = await db.membershipRequest.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      telegram: true,
      message: true,
      createdAt: true,
    },
  });

  return (
    <SidebarProvider>
      <AppSidebar
        user={{
          name: session.user.name,
          email: session.user.email,
          avatar: session.user.image ?? "",
        }}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
            <h1 className="text-base font-medium">Membership requests</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending approvals</CardTitle>
              <Badge variant="outline">{memberships.length}</Badge>
            </CardHeader>
            <CardContent>
              {memberships.length === 0 ? (
                <p className="text-sm text-muted-foreground">No pending membership requests.</p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {memberships.map((membership) => (
                    <div key={membership.id} className="space-y-3 rounded-md border p-3">
                      <div className="space-y-1 text-sm">
                        <p className="font-medium">{membership.fullName}</p>
                        <p className="text-muted-foreground">{membership.email}</p>
                        <p className="text-muted-foreground">{membership.phone}</p>
                        <p className="text-xs text-muted-foreground">
                          Requested: {new Date(membership.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <MembershipDetailTrigger
                          fullName={membership.fullName}
                          email={membership.email}
                          phone={membership.phone}
                          telegram={membership.telegram}
                          message={membership.message}
                          requestedAt={new Date(membership.createdAt).toLocaleString()}
                        />
                        <MembershipRowActions id={membership.id} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
