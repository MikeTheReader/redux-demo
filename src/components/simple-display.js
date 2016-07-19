import React, { Component } from 'react';


export default function SimpleDisplay(props) {
    return (
        <div className="panel panel-success">
            <div className="panel-body">
                {props.count}: {props.value}
            </div>
        </div>
    );
}
