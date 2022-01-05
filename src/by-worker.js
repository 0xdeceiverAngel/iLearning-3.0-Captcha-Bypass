

const workerBlob = new Blob([`

importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js");

const WEIGHTS = [[[[[-1.1565829515457153]], [[-0.8260877728462219]], [[-1.0862188339233398]], [[0.02872108854353428]], [[0.696459949016571]]], [[[0.43722718954086304]], [[-0.12879805266857147]], [[-0.013877402059733868]], [[0.3254631757736206]], [[1.2035900354385376]]], [[[0.12776397168636322]], [[0.634167492389679]], [[-0.61839759349823]], [[0.09893932193517685]], [[0.8465738892555237]]], [[[0.3917979598045349]], [[0.6789655089378357]], [[-0.4294130802154541]], [[1.4799872636795044]], [[1.2969986200332642]]], [[[0.011909103021025658]], [[-0.222647026181221]], [[-0.25437799096107483]], [[2.0947818756103516]], [[1.8759740591049194]]]], [-0.12433522194623947], [[0.12757734954357147, 0.3673234283924103, -0.16048932075500488, 0.1651974618434906], [0.6863444447517395, 0.41815435886383057, -0.16488151252269745, 0.10310034453868866], [-0.03809245675802231, -0.2977055013179779, -0.2540316581726074, 0.40105777978897095], [0.09622817486524582, 0.17082320153713226, -0.0107200276106596, -0.36047425866127014], [-0.8884735107421875, -0.0922434851527214, -0.2189096212387085, 0.38477638363838196], [-0.44309335947036743, -0.3327051103115082, 0.21018096804618835, -0.14702120423316956], [0.04795590788125992, 0.004221770912408829, -0.03563863784074783, 0.341327041387558], [0.11588755249977112, 0.4135056436061859, 0.627689003944397, -0.14995093643665314], [0.023973727598786354, -0.7686800956726074, 0.002840260276570916, 0.15253721177577972], [0.4192250370979309, -0.016095861792564392, 0.6850325465202332, -0.6390921473503113], [0.7354945540428162, 0.5037025213241577, 0.37410321831703186, -0.36029481887817383], [-0.17354260385036469, 0.01833418942987919, -0.08615119755268097, -0.2830697000026703], [0.13060347735881805, -0.4749188721179962, -0.006706013344228268, -0.14461825788021088], [-1.1018338203430176, -0.05745760723948479, 0.5663290619850159, -0.7734577059745789], [0.1784002184867859, -0.47382017970085144, -0.10665899515151978, -0.051243096590042114], [0.0032629414927214384, 0.18561848998069763, 0.028114400804042816, -0.1576254665851593], [-0.35736843943595886, 0.2110138088464737, 0.2762570381164551, 1.025088906288147], [-0.14449875056743622, 0.3536239266395569, 0.10148493945598602, -0.2056189775466919], [-0.3229459822177887, -0.45130619406700134, 0.4545559585094452, -0.46335798501968384], [0.0049440618604421616, -0.8404926657676697, -0.621066689491272, -0.2623775005340576], [-0.20098234713077545, 0.11260437965393066, -0.1667541116476059, 0.4036386013031006], [-0.4917393624782562, 0.0700066015124321, 0.04698200523853302, 0.40730851888656616], [-0.3442651331424713, -1.1362988948822021, -0.4433232247829437, 0.12137719988822937], [-0.08720384538173676, -0.23404525220394135, -0.15195627510547638, -0.22000005841255188], [-0.09962484240531921, -0.28409844636917114, -0.22492818534374237, -0.6228921413421631], [-0.1237354725599289, 0.2260293811559677, -0.25138014554977417, -0.2433401197195053], [0.21538576483726501, 0.35921913385391235, 0.1383143812417984, 0.3452443480491638], [0.46696412563323975, 0.18016646802425385, -0.43456485867500305, 0.5076485872268677], [0.7896151542663574, 0.9828367233276367, 0.4678289294242859, -0.47899484634399414], [0.2742832601070404, 0.04495534673333168, 0.2184762805700302, -0.2632252275943756], [0.2959749102592468, -0.10736828297376633, -0.6088117957115173, 0.054147351533174515], [0.23836898803710938, 0.47097834944725037, -0.4313381016254425, -0.39581498503685], [-0.38386592268943787, 0.03698675334453583, 0.7405234575271606, 0.36030104756355286], [-0.8271450400352478, -0.2868056297302246, 0.20811936259269714, -0.6411319375038147], [0.3542098104953766, -0.8282374739646912, 0.40659818053245544, 0.19539393484592438], [-0.2621622085571289, 0.06445033848285675, -0.042326707392930984, -0.29307448863983154]], [0.01837346889078617, -0.06497906148433685, 0.03984557464718819, 0.12545038759708405], [[-0.10911243408918381, 0.21288466453552246, 0.6313232779502869, 0.6766897439956665, -0.8374488353729248, -0.6448250412940979, -0.7874974012374878, 0.45441552996635437, 0.34124746918678284, -0.4659918546676636], [0.3037312626838684, -0.3196354806423187, 1.1551581621170044, 0.47947415709495544, -0.6165680289268494, 1.0254340171813965, -0.6353724002838135, -0.5108935832977295, -0.2218671292066574, 0.7830821871757507], [0.03068196028470993, 0.9404616951942444, 0.704375684261322, -0.6907392144203186, 0.6848242282867432, -0.07665657997131348, -0.7938072681427002, -1.0432102680206299, 0.48394569754600525, 0.8607168197631836], [-0.16745036840438843, 1.004818081855774, -0.44334307312965393, 0.7715298533439636, -0.5281175971031189, 0.8015261292457581, 0.5182729363441467, -0.6975368857383728, -1.017256736755371, -0.8834699988365173]], [-2.1739397048950195, -0.10333092510700226, -0.2512761056423187, 0.2835245430469513, -0.3290964961051941, 0.5191237330436707, -0.18431220948696136, -0.32005664706230164, 0.5460247993469238, -0.1278674304485321]]



function convertByColor(I){
	I = I.neg().add(255);
	I = tf.mean(I, 2);
	I = tf.cast(I.greater(160), "float32");
    return I;
}

function splitImage(I){
	
	I = tf.slice(I, [3, 11], [20, 79]);
	let [h, w] = I.shape;
	let w2 = Number.parseInt(w/6);
	let result = Array.from(Array(6))
		.map((_, i) => tf.slice(I, [0, i*w2], [I.shape[0], w2]))
		.map(img => tf.pad(img, [[4,4],[7,8]]));
	
	return result
}
function imagesToTensors(image_list){
	var result = tf.concat(image_list, 0);
	result = result.reshape([image_list.length, 28, 28, 1]);
	return result;
}
function loadWeights(model, weights){
	weights = weights.map(w => tf.tensor(w));
	model.setWeights(weights);
}
function build_model(){
	let inputs = tf.input({shape:[28, 28, 1], name:'inputs'});
	
	let conv1 = tf.layers.conv2d({filters :1, kernelSize: 5, name:'conv1'}).apply(inputs);
	let pool1 = tf.layers.maxPool2d({poolSize :[4, 4], name:'pool1'}).apply(conv1);
	let flatten = tf.layers.flatten({name: "flatten"}).apply(pool1);
	
	let dense1 = tf.layers.dense({units: 4, name: "dense1"}).apply(flatten)
	
	let drop1 = tf.layers.dropout({rate: 0.2, name:"drop1"}).apply(dense1);
	let outputs = tf.layers.dense({units: 10, activation: "softmax", name:"outputs"}).apply(drop1);

	let model = tf.model({inputs: inputs, outputs: outputs});
	
	// model.compile({optimizer: 'adam',loss: 'categoricalCrossentropy',metrics: ['accuracy']})
	// model.summary()
	return model;
}

function predict(model, I){
	//let I = tf.browser.fromPixels(imgElem);
	
	I = convertByColor(I);
	let images = splitImage(I);
	let tensors = imagesToTensors(images);
	let pY = model.predict(tensors);
	return pY.argMax(1).arraySync().join("");
}

var model = build_model();
console.log('build');
loadWeights(model, WEIGHTS);
console.log('load weights');
tf.engine().startScope();
console.log('tf start');
tf_load=1;
onmessage = function(e) {
	// tf.engine().startScope();
	let I = tf.tensor(new Uint8Array(e.data.buffer), [28, 100, 4]);
	I = tf.slice(I, [0, 0, 0], [28, 100, 3]);
	let result = predict(model, I);
	// tf.engine().endScope();
	postMessage(result);
}
`]);
// var tf_load=0;
// const tf_event = new Event('build');
// tf_load.addEventListener('build',function(e){},false);

var worker = new Worker(window.URL.createObjectURL(workerBlob));


if(document.readyState === "complete" || document.readyState === "interactive") {
	// setTimeout(main, 1);
	console.log('dom_already_compe');
	main();
}else{
	document.addEventListener("DOMContentLoaded", main);
}

async function main(){
	console.log('main');

	const captchaElem = document.getElementsByClassName("fs-form-captcha-field")[0];
	const refreshBn = document.getElementsByClassName("js-refresh-captcha")[0];
	const submitBn = document.getElementsByClassName("btn btn-primary btn-lg btn-block")[0];
	try{
		document.getElementsByClassName("p-block")[0].remove();
	}
	catch(err){}
	if(!captchaElem) return;
	
	worker.onmessage  = e =>{
		captchaElem.value = e.data;
		if(checkCapthaError()) submitBn.click();
	}
	
	document.getElementsByClassName("js-captcha")[0].addEventListener("load", function(){
		refreshCaptcha();
	});
	setTimeout(refreshCaptcha, 0.5);
	

	function refreshCaptcha(){
		let I = document.getElementsByClassName("js-captcha")[0];
		let canvas = document.createElement("canvas");
		canvas.height = I.naturalHeight;
		canvas.width = I.naturalWidth;
		let ctx = canvas.getContext("2d");

		ctx.drawImage(I, 0, 0);
		let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
		worker.postMessage(data);
	}
	
	function checkCapthaError(){
		return document.getElementsByClassName("help-block").length ==1 &&
			Array.from(document.getElementsByClassName("help-block")).some(elem=>{
			  if(elem.childNodes[0] && elem.childNodes[0].childNodes[1]){
				elem = elem.childNodes[0].childNodes[1];
				return elem.textContent.indexOf("驗證") !== -1 ||
					elem.textContent.indexOf("验证") !== -1 ||
					elem.textContent.indexOf("aptcha") !== -1 ;
			  }
			  return false;
			})
	}
}



