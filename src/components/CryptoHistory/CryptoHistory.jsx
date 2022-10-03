import { format } from 'date-fns';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({items}) => {
  return (
  <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
        {
          items.map(({ id, price, amount, date }, idx) => (
          <Tr key={id}>
            <Td>{idx + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{format(new Date(date), 'MM/dd/yyyy, HH:mm a')}</Td>
          </Tr>
        ))}
  </tbody>
</BaseTable>
    );
};
