import { Paper } from '@/components/paper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { profiles } from '@/composition/data/profile'
import { AppLayout } from '@/composition/layout'
import { EditProfileSettings } from '@/composition/settings'
import { cn } from '@/lib/utils'

import type { PassedProps } from './_app'

export default function Settings({ fonts }: PassedProps) {
  return (
    <div className={cn(fonts.inter.className)}>
      <AppLayout className="bg-background-alt">
        <Paper className="p-4 lg:p-6">
          <Tabs defaultValue="edit-profile">
            <TabsList>
              <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="edit-profile">
              <EditProfileSettings profile={profiles[0]} />
            </TabsContent>

            <TabsContent value="preferences">
              <div />
            </TabsContent>

            <TabsContent value="security">
              <div />
            </TabsContent>
          </Tabs>
        </Paper>
      </AppLayout>
    </div>
  )
}
