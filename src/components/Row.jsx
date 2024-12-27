const Row = ({ name, desc, percent, isStriped }) => {
    return (
      <tr className={isStriped ? 'bg-gray-100' : 'bg-white'}>
        <td className="px-5 py-4 font-semibold text-black whitespace-nowrap">{name}</td>
        <td className="px-5 py-4 text-gray-700 text-sm">{desc}</td>
        <td className="px-5 py-4 font-semibold text-right text-black">{percent}</td>
      </tr>
    );
  };
  
  export default Row;
  