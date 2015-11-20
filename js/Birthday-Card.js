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

var BirthdayPeople = React.createClass({
	render: function () {
		var birthdayName = this.props.birpeople.map(function (people) {
			return (
				<span>{people}</span>
			);
		});
		return (
			{birthdayName}
		);
	}
});

var BirthdayPic = React.createClass({
	render: function () {
		return (
			<img src="img/Birthday-Cake-128.png" alt="Birthday-Cake"/>
		);
	}
})

var BirthdayBody = React.createClass({
	render: function () {
		return (
			<div className="birthday-name">
				<BirthdayPeople birpeople={["刘子健","苏俊飞","宋成成"]}/>
				<BirthdayPic/>
			</div>
		);
	}
})
ReactDOM.render(
	<div className="card birthday">
		<CardHeader/>
		<BirthdayBody/>
	</div>,
	document.getElementById('container')
)