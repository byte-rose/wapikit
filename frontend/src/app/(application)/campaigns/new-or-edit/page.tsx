'use client'

import { useSearchParams } from 'next/navigation'
import { useGetCampaignById } from 'root/.generated'
import BreadCrumb from '~/components/breadcrumb'
import DocumentationPitch from '~/components/forms/documentation-pitch'
import NewCampaignForm from '~/components/forms/new-campaign-form'
import LoadingSpinner from '~/components/loader'
import { Heading } from '~/components/ui/heading'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'

const CreateNewCampaignPage = () => {
	const breadcrumbItems = [
		{ title: 'Campaigns', link: '/campaigns' },
		{ title: 'Create', link: '/campaigns/new-or-edit' }
	]

	const searchParams = useSearchParams()
	const campaignId = searchParams.get('id')

	const { data: campaignResponse, isFetching } = useGetCampaignById(campaignId || '', {
		query: {
			enabled: !!campaignId
		}
	})

	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
				<BreadCrumb items={breadcrumbItems} />
				<div className="flex items-start justify-between">
					<Heading title={`Create New Campaign`} description="" />
				</div>
				<Separator />

				<div className="flex flex-row gap-10">
					{campaignId ? (
						<>
							{isFetching ? (
								<div className="flex h-full w-full items-center justify-center">
									<LoadingSpinner />
								</div>
							) : (
								<NewCampaignForm initialData={campaignResponse?.campaign || null} />
							)}
						</>
					) : (
						<NewCampaignForm initialData={campaignResponse?.campaign || null} />
					)}

					<DocumentationPitch type="campaign" />
				</div>
			</div>
		</ScrollArea>
	)
}

export default CreateNewCampaignPage
