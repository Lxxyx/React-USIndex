var TodayDate = React.createClass({
	render: function () {
		return (
			<span className="card-title-h1">
				{this.props.date}
			</span>
		);
	}
})

var Link = React.createClass({
	render: function () {
		return (
			<a href="#" className={this.props.class}>
				送上祝福
			</a>
		);
	}
})

var CardHeader = React.createClass({
	render: function () {
		return (
			<div className="card-header">
				<TodayDate date = '十一月二十号'/>
				<Link class="fr link card-title-link"/>
			</div>
		);
	}
})

ReactDOM.render(
	<CardHeader/>,
	document.getElementById('container')
)