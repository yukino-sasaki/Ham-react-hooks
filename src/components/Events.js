import React, { useContext } from 'react'
import Event from './Event.js'
import AppContext from '../components/contexts/AppContext'

const Events = () => {
    //AppContext.Providerを使ってvalue={state,dispatch}を渡している
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
                    {state.events.map((event, index) => (
                        <Event key={index} event={event} />
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Events