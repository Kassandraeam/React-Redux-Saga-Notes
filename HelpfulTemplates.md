<div Template >
<script>
</script>
</div>

<div useParams explained: >
1. import { useParams } from "react-router-dom";
2. inside of your function in your component declare a variable equal to useParams();
    2a. const id = useParams();
# So what does useParams do? #
    The useParams hook grabs the ID from the URL, and returns an OBJECT with a key and value {key: value}.
    Look at line 9:
    We set const id = useParams();
    id is the key, and the actual value that useParams captures is the ID from the URL.
    example: {id: 4}
    what if we declared const TACO = useParams(); instead?
    Then it would look like this:
    example: {TACO: 4}
    To be consistent, let's say that we declared const id = useParams(); moving forward.
    example: {id: 4}
    So how do you use this? 
    You can dispatch this variable in your payload so that you have access to this id elsewhere. 
    For example, say you want to get information for a specific user, you'd need to send something that identifies them.
  <script>
    useEffect(() => {
      dispatch({
        type: 'type_that_activates_a_watcher',
        payload: id 
      })
    }, [])
  </script>
    If you were to send this to a SAGA, you would have access to this id for any request that requires specificity.
    And remember that we're dispatching an OBJECT, 
    so wherever that id lands we need to drill into it as an OBJECT.
    For example, say you sent it to a generator function that's making a GET request.
    To access it, you'd call ${action.payload.id}.
    Say we called payload, taco, instead, in the dispatch on line 22? 
  <script>
    useEffect(() => {
      dispatch({
        type: 'type_that_activates_a_watcher',
        taco: id 
      })
    }, [])
  </script>
    To access it, we'd call it ${action.taco.id}.
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
        import { useHistory, useParams } from 'react-router-dom';
        //
        function(){
            const store = use((selector) => store);
            const reducer = use((selector) => store.reducer);
            const dispatch = useDispatch();
            const history = useHistory();
            const id = useParams();
            const [state, setState] = useState(/*initial state in here*/)
                return(
                <div>
                    <p>This will show up on the DOM</p>
                </div>
                )
}
    </script>
</div>

