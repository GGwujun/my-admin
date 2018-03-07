import {
	gbs
} from 'config/settings.js';

module.exports = {
	name: 'edit-class',
	data() {
		return {
			article_data: {
				className: '',//课程标题
				classId: 0,
				status: true, //'状态。1：启用；2：禁用',
			},
			rules: {
				className: [{
					required: true,
					message: '文章标题不能为空！',
					trigger: 'blur'
				}],
				classId: [{
					required: true,
					message: '文章分类不能为空！',
					trigger: 'blur'
				}],
			}
		}
	},
	methods: {
		/**
		 * 提交表单
		 * @param  {string} formName 表单名称
		 */
		onSubmit(formName) {
			var ref = this.$refs[formName];
			ref.validate((valid) => {
				if (valid) {
					this.article_data.uid = this.$store.getters.getUserinfo.id
					this.$$api_class_saveClass(this.article_data, data => {
						this.$router.push('/demo/class/list');
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
		if (this.$route.query.pid) this.article_data.pid = this.$route.query.pid
		var self = this;


		if (this.$route.query.id) {
			var data = {
				id: this.$route.query.id
			};
			this.$$api_class_findClass(data, (data) => {
				this.article_data = data.article_info;
				this.article_data.status = data.article_info.status == 1 ? true : false;
			});
		}
	}
}