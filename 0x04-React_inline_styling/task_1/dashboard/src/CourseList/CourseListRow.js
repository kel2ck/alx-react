import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
	backgroundColour: '#deb5b545',
};

const rowStyle = {
	backgroundColour: '#f5f5f5ab',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr style={rowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th style={headerStyle} colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

export default CourseListRow;