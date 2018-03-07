import {
	gbs
} from 'config/settings.js';

module.exports = {
	name: 'edit-article',
	data() {
		return {
			article_data: {
				title: '',//课程标题
				content: '',//'课程内容',
				summary: '',//简洁
				coursepath: [{ url: '' }],//课程路径
				cate: '', //'课程分类',
				tabs: ['html'],//'课程标签，不能超过5个',
				status: true, //'状态。1：启用；2：禁用',
				create_ltime: new Date(), //'创建时间',
				pid: 0,
				pTitle: ''
			},
			temp: {
				content: ''
			},
			Pcourse: [],
			Classs: [],
			rules: {
				title: [{
					required: true,
					message: '文章标题不能为空！',
					trigger: 'blur'
				}],
				tabs: [{
					type: 'array',
					required: true,
					message: '请至少选择一个文章标签！',
					trigger: 'change'
				}],
				summary: [{
					required: true,
					message: '文章不能为空！',
					trigger: 'blur'
				}]
			},

			_t: null
		}
	},
	methods: {
		addPcourses(boolean) {
			if (boolean && !this.Pcourse.length) {
				this.$$api_course_selectPCourse({ uid: this.$store.getters.getUserinfo.id }, (article_data) => {
					this.Pcourse = article_data.list.data;
				});
			}
		},

		addClass(boolean) {
			if (boolean && !this.Classs.length) {
				this.$$api_class_selectClass({ uid: this.$store.getters.getUserinfo.id }, (article_data) => {
					this.Classs = article_data.list.data;
				});
			}
		},
		/**
		 * 提交表单
		 * @param  {string} formName 表单名称
		 */
		onSubmit(formName) {
			var ref = this.$refs[formName];
			ref.validate((valid) => {
				if (valid) {
					this.article_data.uid = this.$store.getters.getUserinfo.id
					this.article_data.coursepath = [JSON.stringify(this.article_data.coursepath[0])]
					this.$$api_course_saveCourse(this.article_data, data => {
						this.$router.push('/demo/course/list');
					});
				}
			});
		}
		,
		reset_article(article) {
			this.$refs[article].resetFields();
		}
	},

	mounted() {
		if (this.$route.query.pid) {
			this.article_data.pid = this.$route.query.pid;
			this.article_data.pTitle = this.$route.query.pName;
		}
		var self = this;


		if (this.$route.query.id) {
			var data = {
				id: this.$route.query.id
			};
			this.$$api_course_findCourse(data, (data) => {
				this.article_data = data.article_info;
				this.article_data.status = data.article_info.status == 1 ? true : false;
				this.article_data.tabs = data.article_info.tabs.split(',')
			});
		}

		var config = {
			host: 'http://114.67.135.113:88/php',
			autoRemoveCompleted: false,
			autoUploading: false,
			browseFileId: "i_select_files", /** 选择文件的ID, 默认: i_select_files */
			browseFileBtn: "<span>请选择文件</span>", /** 显示选择文件的样式, 默认: `<div>请选择文件</div>` */
			filesQueueId: "i_stream_files_queue", /** 文件上传容器的ID, 默认: i_stream_files_queue */
			filesQueueHeight: 200, /** 文件上传容器的高度（px）, 默认: 450 */
			messagerId: "i_stream_message_container", /** 消息显示容器的ID, 默认: i_stream_message_container */
			multipleFiles: true, /** 多个文件一起上传, 默认: false */
			uploadURL: "/upload.php?action=up&", /** HTML5上传的URI */
			tokenURL: '/upload.php?action=tk&',
			onComplete: function (file) {
				file['url'] = '/uploads/files/' + JSON.parse(file.msg).filepath + '/' + JSON.parse(file.msg).filename
				self.article_data.coursepath = [];
				self.article_data.coursepath.push(file);
			}
		};

		this._t = new Stream(config);
	}
}