import { useState } from 'react';

const FilterTasks = (props) => {
  const [item, setItem] = useState(props.data);

  const menuItems = [
    ...new Set(
      props.data.map((Val) => {
        Val.id;
      })
    ),
  ];

  const filterItem = (curcat) => {
    const newItem = props.data.filter((newVal) => {
      return newVal.id === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div>
        <div>
          <h1>Food Filtering App</h1>
          <div>
            {menuItems.map((Val, id) => {
              <button onClick={() => filterItem(Val)} key={id}>
                {Val}
              </button>;
            })}
            <button
              onClick={() => {
                setItem(props.data);
              }}
            >
              All
            </button>
          </div>
          <>
            <div>
              <div>
                {item.map((Val) => {
                  <div key={Val.id}>
                    <div>filter by name</div>
                    <div>
                      <div>
                        {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                        {Val.price}
                      </div>
                      <div>{Val.desc}</div>
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default FilterTasks;
