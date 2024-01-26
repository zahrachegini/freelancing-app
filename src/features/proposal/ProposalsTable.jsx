import React from "react";
import useProposals from "./useProposals";
import Table from "../../ui/Table";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import ProposalsRow from "./ProposalsRow";


function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty resourceName="درخواستی یافت نشد" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalsRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
