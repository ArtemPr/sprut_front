import React from 'react'
import './FgosType.css'

const FgosType = () => {
    return (
        <>
            <div class="mb-3 fgos-education fgos-education--show">
                <label class="form-label">Выберите образование</label>
                <div class="input-icon mb-3">
                    <input type="text" value="" class="form-control fgos-filter"
                        placeholder="Выберите образование" />
                    <span class="input-icon-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                    </span>
                </div>
                <input type="hidden" class="fgos-hidden" />
                <ul class="fgos-education__list"></ul>
            </div>
        </>
    )
}

export default FgosType