import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./../../ui/Stat";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const numOfAcceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = numOfAcceptedProposals.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        title="تعداد درخواست ها"
        color="yellow"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
      />
      <Stat
        title="درخواست های تایید شده"
        color="primary"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfAcceptedProposals.length}
      />
      <Stat
        title="کیف پول"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
