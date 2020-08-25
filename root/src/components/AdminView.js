import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store';

export const AdminView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const loading = useSelector(state => state.memberReducer.isLoading)
    const dispatch = useDispatch();

    const [tasksList, setTasksList] = useState([]);

    console.log(tasks);
    console.log(loading)

    useEffect(() => {
        dispatch(fetchTasks())

    }, [])
    
    return (
        <div>
            {
                loading ? <div>Loading</div> : <div>Not Loading</div>
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         tasks: state.tasks,
//         loading: state.isLoading,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, { fetchTasks })(AdminView);