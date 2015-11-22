var detail_s = "平时会有什么非常重要的事情，要这么严肃以公告的形式发布出来呢？我也不知到，但是估计下来这里也可以放下很多的字吧，万一不够还可以省略掉是不是。但是居然不能用sketch还得用上PS不过也就这样吧..."

var HeaderTitle = React.createClass({
	render: function () {
		return (
			<span className="card-title-h1">
				{this.props.title}
			</span>
		);
	}
});

var Link = React.createClass({
	render: function () {
		return (
			<a href="#" className={this.props.class}>
				{this.props.link}
			</a>
		);
	}
});

var Button = React.createClass({
	render: function () {
		return (
			<button className={this.props.class}>
				{this.props.name}
			</button>
		);
	}
});

var CardHeader = React.createClass({
	render: function () {
		return (
			<div className="card-header">
				<HeaderTitle title = {this.props.title}/>
				<Link class="fr link card-title-link" link={this.props.link}/>
			</div>
		);
	}
});

var Name = React.createClass({
	render: function () {
		return (
			<span>{this.props.name}</span>
		);
	}
});

var BirthdayPeople = React.createClass({
	render: function () {
		var birthdayName = this.props.birpeople.map(function (people) {
			return (
				<Name name={people}/>
			)
		})
		return (
			<span>
				{birthdayName}
			</span>
		);
	}
});

var BirthdayPic = React.createClass({
	render: function () {
		return (
			<img src="img/Birthday-Cake-128.png" alt="Birthday-Cake" className="fr" style={{marginRight: "20px"}}/>
		);
	}
});

var BirthdayBody = React.createClass({
	render: function () {
		return (
			<div className="birthday-name">
				<BirthdayPeople birpeople={["刘子健","苏俊飞","宋成成"]}/>
				<BirthdayPic/>
			</div>
		);
	}
});
//公告卡片部分
var NoticePreviewTitle = React.createClass({
	render: function () {
		return (
			<span className="card-title-h2">
				{this.props.title}
			</span>
		);
	}
});

var NoticePreviewTime = React.createClass({
	render: function () {
		return (
			<span className="fr card-title-time">
				{this.props.time}
			</span>
		);
	}
});

var NoticePreviewDetails = React.createClass({
	render: function () {
		return (
			<p>
				{this.props.details}
			</p>
		);
	}
});

var NoticePreviewWatchWhole = React.createClass({
	render: function () {
		return (
			<a href={this.props.link} className="link fl notice-all">
				全部内容
			</a>
		);
	}
});

var NoticePreviewArticle = React.createClass({
	render: function () {
		return (
			<article>
				<NoticePreviewDetails details={this.props.details}/>
				<NoticePreviewWatchWhole link={this.props.link}/>
				<div className="clear"></div>
			</article>
		);
	}
});

var NoticeWatchMore = React.createClass({
	render: function () {
		return (
			<div>
				<p className="tac">
					<a href="#" className="link notice-more">
						查看更多……
					</a>
				</p>
			</div>
		);
	}
})

var NoticePreview = React.createClass({
	render: function () {
		return (
			<div className="notice-preview">
				<NoticePreviewTitle title="设计部第四次例会"/>
				<NoticePreviewTime time="十一月二十一号"/>
				<NoticePreviewArticle details={detail_s} link="#"/>
			</div>
		);
	}
});

var NoticePreviewPrepare = React.createClass({
	render: function () {
		return (
			<div className="notice-preview">
				<NoticePreviewTitle title="设计部第四次例会"/>
				<NoticePreviewTime time="十一月二十一号"/>
			</div>
		);
	}
});

var NoticeRelease = React.createClass({
	render: function () {
		return (
			<p className="tac">
				<img src="img/releaseNotice.png" alt="releaseNotice" className="vam"/>
				<a href="#" className="link releaseNotice">发布公告</a>
			</p>
		);
	}
});
//动态发表


var DynamicHeader = React.createClass({
	render: function () {
		return (
			<div className="card-header">
				<HeaderTitle title = {this.props.title}/>
				<Button class="button releaseDynamic" name="发起话题"/>
				<Button class="button allDynamic" name="全部"/>
				<Button class="button myDynamic" name="与我相关"/>
				<Link class="fr link card-title-link" link={this.props.link}/>
			</div>
		);
	}
});

var ViewDynamic = React.createClass({
	render: function () {
		return (
			<div className="view-danamic">

			</div>
		);
	}
});

//个人动态

var PcHead = React.createClass({
	render: function () {
		return (
			<img src={this.props.headUrl} alt="个人头像"/>
		);
	}
});

var PcName = React.createClass({
	render: function () {
		return (
			<p>{this.props.name}</p>
		);
	}
});

var PcDepartment = React.createClass({
	render: function () {
		return (
			<p>{this.props.department}</p>
		);
	}
});

var PcInformation = React.createClass({
	render: function () {
		return (
			<div className="pc-header">
				<PcHead headUrl="img/bigthumb.png"/>
				<PcName name="Angela Aki" />
				<PcDepartment department="设计部"/>
			</div>
		);
	}
});

//最底层的三个按钮

var WriteRizhi = React.createClass({
	render: function () {
		return (
			<div className="rizhi">
				<img src="img/rizhi.png" alt="日志"/>
				<span>家园志</span>
			</div>
		);
	}
});

var WritePhotoWall = React.createClass({
	render: function () {
		return (
			<div className="photo">
				<img src="img/photo.png" alt="照片墙"/>
				<span className="vam">照片墙</span>
			</div>
		);
	}
});


var WriteGame = React.createClass({
	render: function () {
		return (
			<div className="game">
				<img src="img/game.png" alt="游戏+"/>
				<span className="vam">游戏+</span>
			</div>
		);
	}
})

ReactDOM.render(
	<div className="main">
		<div className="fl">
			<div className="card birthday">
				<CardHeader title="十一月二十号" link="送上祝福"/>
				<BirthdayBody/>
			</div>
			<div className="card notice">
				<CardHeader title="US公告" link="编辑"/>
				<NoticePreview/>
				<NoticePreviewPrepare/>
				<NoticePreviewPrepare/>
				<NoticePreviewPrepare/>
				<NoticeWatchMore/>
			</div>
			<div className="card">
				<NoticeRelease/>
			</div>
		</div>
		<div className="fl">
			<div className="card dynamic">
				<DynamicHeader title="动态" link="编辑"/>
				<ViewDynamic/>
			</div>
		</div>
		<div className="fl">
			<div className="card pc">
				<PcInformation/>
			</div>
		</div>
		<div className="card write fl">
			<WriteRizhi/>
			<WritePhotoWall/>
			<WriteGame/>
		</div>
	</div>,
	document.getElementById('container')
);