import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dayjs from 'dayjs'

function Education ({ education }) {
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

    const educations = education.map(edu => (
        <tr key = {edu._id}>
            <td>{edu.school}</td>
            <td className='hide-sm'>{edu.degree}</td>
            <td className='hide-sm'>
                {formatDate(dayjs(edu.from), (!edu.to ? dayjs() : dayjs(edu.to))).years} years, {formatDate(dayjs(edu.from), (!edu.to ? dayjs() : dayjs(edu.to))).months} months, {formatDate(dayjs(edu.from), (!edu.to ? dayjs() : dayjs(edu.to))).days} days
            </td>
            <td>
                <button className = 'btn btn-danger'>Delete</button>
            </td>
        </tr>
    ))

    return (
        <>
        <h2 className='my-2'>Education Credentials</h2>
        <table className = 'table'>
            <thead>
                <tr>
                    <th>School</th>
                    <th className = 'hide-sm'>Degree</th>
                    <th className = 'hide-sm'>Years</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {educations}
            </tbody>
        </table>
        </>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
}

export default connect()(Education)
