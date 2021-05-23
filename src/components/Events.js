import React, { useContext } from 'react'
import Event from './Event.js'
import AppContext from '../components/contexts/AppContext'

const Events = () => {
    const { state } = useContext(AppContext)
    return (
        <>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (
                        <Event key={index} event={event} />
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Events