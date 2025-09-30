import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dayjs from 'dayjs'

function Experience ({ experience }) {
    const formatDate = (startDate, endDate) => {
        const start = dayjs(startDate)
        const end = dayjs(endDate)
        

        let years = end.diff(start, 'year')
        let remainingDate = start.add(years, 'year')
        if(start.add(years, 'year').isAfter(end)){
            years--
            remainingDate = start.add(years, 'year')
        }

        let months = end.diff(remainingDate, 'month')
        let remainingDateAfterMonths = remainingDate.add(months, 'month')
        if(start.add(months, 'month').isAfter(end)){
            months--
            remainingDateAfterMonths = remainingDate.add(months, 'month')
        }

        const days = end.diff(remainingDateAfterMonths, 'day')
        return { years, months, days }
    }

    const experiences = experience.map(exp => (
        <tr key = {exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td className='hide-sm'>
                {formatDate(dayjs(exp.from), (!exp.to ? dayjs() : dayjs(exp.to))).years} years, {formatDate(dayjs(exp.from), (!exp.to ? dayjs() : dayjs(exp.to))).months} months, {formatDate(dayjs(exp.from), (!exp.to ? dayjs() : dayjs(exp.to))).days} days
            </td>
            <td>
                <button className = 'btn btn-danger'>Delete</button>
            </td>
        </tr>
    ))

    return (
        <>
        <h2 className='my-2'>Experience Credentials</h2>
        <table className = 'table'>
            <thead>
                <tr>
                    <th>Company</th>
                    <th className = 'hide-sm'>Title</th>
                    <th className = 'hide-sm'>Years</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {experiences}
            </tbody>
        </table>
        </>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default connect()(Experience)
