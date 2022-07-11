import React from 'react'
import './FgosType.css'

const FgosType = () => {
    return (
        <>
            <div className="mb-3 fgos-education fgos-education--show">
                <label className="form-label">Выберите образование</label>
                <div className="input-icon mb-3">
                    <input type="text" value="" className="form-control fgos-filter"
                        placeholder="Выберите образование" />
                    <span className="input-icon-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                    </span>
                </div>
                <input type="hidden" className="fgos-hidden" />
                <ul className="fgos-education__list"></ul>
            </div>
        </>
    )
}

export default FgosType