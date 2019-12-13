import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';

interface IParams {
    id: string
}

function TodoItemById() {
    const params = useParams<IParams>();

    return (
        <>
            Mon id est {params.id}
        </>
    )
}

export default withRouter(TodoItemById);