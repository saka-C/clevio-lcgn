const Row = ({ name, desc, isStriped }) => {
    return (
      <tr className={isStriped ? 'bg-gray-100' : 'bg-white'}>
        <td className="px-5 py-4 font-semibold text-black whitespace-nowrap">{name}</td>
        <td className="px-5 py-4 text-gray-700 text-sm">{desc}</td>
      </tr>
    );
  };
  
  export default Row;
  