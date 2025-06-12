import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom';
import './U2.css';

function U2() {
  const location = useLocation();
  const { data,username } = location.state;
  const navigate = useNavigate();
  // 使用 useMemo 缓存 columns
  const columns = useMemo(() => {
    return Object.keys(data[0] || {}).map(key => ({
      Header: key,
      Accessor: key
    }));
  }, [data]);
  function mingxi1() {
    console.log("画面5data",data);
    console.log("画面5username",username);
    navigate('/U5', { state: { data: data ,username:username} });
  }

  return (
    <div >
      <div >
      <h2 >你好</h2> 
      <h3 >用户交易明细</h3>
      <button onClick={mingxi1}  class="button2"  >贷款确认</button>
      </div>
    <table  border="1">
      <thead >
        
        <tr>
          <th class="th th1">Name </th>
          <th class="th th1">username</th>
        </tr>
        
      </thead >
      <tbody >
        {data.map(data => (
          <tr key={data.id}>
            <td class="th th3">{data.name}</td>
            <td class="th th3">{data.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  );
}

export default U2;