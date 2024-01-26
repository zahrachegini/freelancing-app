import React from "react";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    label: "تائید شده",
    className: "badge--success",
  },
];

function ProposalsRow({ proposal, index }) {
  const { status, description, duration, price } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 30)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        {
          <span className={`badge ${statusStyle[status].className}`}>
            {statusStyle[status].label}
          </span>
        }
      </td>
    </Table.Row>
  );
}

export default ProposalsRow;
