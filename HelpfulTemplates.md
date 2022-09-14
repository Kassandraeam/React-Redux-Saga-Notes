<div>
<script>
</script>
</div>

<div Want to map through a reducer? >
<script>
{
  ReducerInventory.map(ReducerItem => (
    <div className='map' key={ReducerItem.id}>
      <p>{ReducerItem.columnNameOne}</p>
      <p>{ReducerItem.columnNameTwo}</p>
      <p>{ReducerItem.columnNameThree}</p>
    </div>
  ))
}
</script>
</div >

<div List of common hook imports and consts that you have to set up>
    <script>
        import React, { useState, useEffect } from 'react';
        import { useSelector, useDispatch } from 'react-redux';
        import { useHistory } from 'react-router-dom';
        //
        function(){
            const store = use((selector) => store);
            const reducer = use((selector) => store.reducer);
            const dispatch = useDispatch();
            const history = useHistory();
            const [state, setState] = useState(/*initial state in here*/)
                return(
                <div>
                    <p>This will show up on the DOM</p>
                </div>
                )
}
    </script>
</div>

