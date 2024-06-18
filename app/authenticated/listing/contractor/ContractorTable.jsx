import ListRow from '@/app/authenticated/listing/contractor/ListRow'
import { contractorListingData, jobListingData } from '@/app/constants/mockData'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'

const JobTable = (props) => {
  const { filter } = props

  const contractorList = contractorListingData.filter((contractor) => {
    if (filter === 'all') return true
    else {
      return contractor.type === filter
    }
  })

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Contractor</CardTitle>
        <CardDescription>See all the top Contractors</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Descriptiton</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">Rating</TableHead>
              <TableHead className="hidden md:table-cell">
                Member Since
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contractorList.map((listing, index) => {
              return <ListRow key={index} {...listing} />
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}

export default JobTable
