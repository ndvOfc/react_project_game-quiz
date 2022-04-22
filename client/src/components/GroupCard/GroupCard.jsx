import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const GroupCard = ({themes}) => {
    const navigate = useNavigate()
    return (

                <div onClick={() => navigate(`/group/${themes.id}`)} className="col-md-6 col-lg-4 column">
                    <div className="card gr-1">
                        <div className="txt text-xl-left">
                            <h1>{themes.groupName}</h1>
                            <p></p>
                        </div>
                        <div >Играем</div>
                        <div className="ico-card ">
                            <i className="fa fa-rebel"></i>
                        </div>
                    </div>
                </div>


    );
};

export default GroupCard;
