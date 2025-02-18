// import { useQuery } from '@tanstack/react-query'

import { Paper } from '@/components/paper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AppLayout } from '@/composition/layout'
// import { PageLoader } from '@/composition/page-loader'
import { EditProfileSettings } from '@/composition/settings'
import { cn } from '@/lib/utils'
// import { getProfileById } from '@/services/api'

import type { PassedProps } from './_app'

export default function Settings({ fonts, profile }: PassedProps) {
  // const result = useQuery({ queryKey: ['profile', 1], queryFn: () => getProfileById(1) })

  const tabsTriggerExtras = {
    className: `lg:w-30 lg:text-base data-[state=active]:shadow-none relative \
      data-[state=active]:after:absolute data-[state=active]:after:-left-1 data-[state=active]:after:-bottom-1 \
      data-[state=active]:after:w-full data-[state=active]:after:h-[3px] lg:data-[state=active]:after:h-[5px] \
      data-[state=active]:after:bg-black data-[state=active]:after:rounded-md`,
  }

  // if (result.isPending)
  //   return (
  //     <AppLayout className="bg-background-alt" profile={profile}>
  //       <PageLoader />
  //     </AppLayout>
  //   )
  // if (result.error) return 'Error occured'

  return (
    <div className={cn(fonts.inter.className)}>
      <AppLayout className="bg-background-alt" profile={profile}>
        <Paper className="p-4 lg:p-6">
          <Tabs defaultValue="edit-profile">
            <TabsList className="bg-background border-b overflow-y-hidden rounded-none w-full justify-between lg:justify-start lg:space-x-8 xl:space-x-12">
              <TabsTrigger {...tabsTriggerExtras} value="edit-profile">
                Edit Profile
              </TabsTrigger>
              <TabsTrigger {...tabsTriggerExtras} value="preferences">
                Preferences
              </TabsTrigger>
              <TabsTrigger {...tabsTriggerExtras} value="security">
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit-profile">
              <EditProfileSettings profile={profile} />
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
