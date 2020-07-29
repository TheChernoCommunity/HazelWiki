import Global from  "@/scss/Global.scss";

export default class Utils{
	static isLayoutCompact() {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		}
		var r = window.innerWidth / window.innerHeight;
		if(r <= 1) {
			return true;
		}
		if( window.innerWidth <= Global.minScreenWidth){
			return true;
		}
		return false;
	}
}
