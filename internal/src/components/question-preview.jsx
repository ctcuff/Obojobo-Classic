import React from 'react'
import PropTypes from 'prop-types'

export default function QuestionPreview() {
	return <div>@TODO</div>
}

QuestionPreview.defaultProps = {
	response: null
}

QuestionPreview.propTypes = {
	question: PropTypes.shape({
		itemType: PropTypes.oneOf(['MC', 'QA', 'Media']),
		answers: PropTypes.arrayOf(
			PropTypes.shape({
				answerID: PropTypes.string,
				answer: PropTypes.string,
				weight: PropTypes.number
			})
		),
		items: PropTypes.arrayOf(
			PropTypes.shape({
				component: PropTypes.oneOf(['TextArea', 'MediaView']),
				data: PropTypes.string,
				media: PropTypes.arrayOf(
					PropTypes.shape({
						mediaID: PropTypes.number,
						title: PropTypes.string,
						itemType: PropTypes.oneOf(['pic', 'kogneato', 'swf', 'flv', 'mp3']),
						descText: PropTypes.string,
						width: PropTypes.number,
						height: PropTypes.number
					})
				)
			})
		)
	}).isRequired,
	response: PropTypes.oneOfType([null, PropTypes.string])
}