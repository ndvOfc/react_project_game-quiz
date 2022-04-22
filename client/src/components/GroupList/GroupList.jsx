import React,  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGroup } from '../../redux/actionCreators/groupAC'
import  GroupCard  from '../GroupCard/GroupCard'
import { Link } from 'react-router-dom'


const GroupList = () => {
    const dispatch = useDispatch()
    const {group} = useSelector(state => state.group)
    useEffect(() => {
        fetch('http://localhost:5000/api/group')
            .then(res => res.json())
            .then(data => dispatch(initGroup(data)))
    },[dispatch])

console.log(group)
    return (
        <div className="container h-100">
            <Link to="/state" className="btn btn-outline-dark p-3 my-4 mx-4">The best of The Best</Link>
            <Link to="/state" className="btn btn-outline-dark p-3">Профиль</Link>
            <div className="row align-middle h-60">

                 {group.map(el => <GroupCard key={el.id} themes={el}/> )}

            </div>
        </div>
    );
};

export default GroupList;
