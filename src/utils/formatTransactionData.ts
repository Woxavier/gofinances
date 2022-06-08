interface TransactionData {
  title: string;
  value: number;
  transactionType: string;
  date: string;
}

function getTransactionIconAndName(transactionType: string) {
  switch (transactionType) {
    case 'food':
      return { iconName: 'coffee', transaction: 'Alimentação' };
    case 'sales':
      return { iconName: 'dollar-sign', transaction: 'Vendas' };
    default:
      return { iconName: 'codesandbox', transaction: 'Outros' };
  }
}

export function formatTransactionCardData(
  transanctionCardData: TransactionData[]
) {
  const formattedTranscationdCard = transanctionCardData.map(data => {
    const { title, date, transactionType, value } = data;

    return {
      title,
      value,
      info: { ...getTransactionIconAndName(transactionType) },
      date,
    };
  });

  return formattedTranscationdCard;
}
