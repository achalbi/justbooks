export class MapUtils {
	static	deserialize(json, environment, clazz) {
	    var instance = new clazz();
	    for(var prop in json) {
	        if(!json.hasOwnProperty(prop)) {
	            continue;
	        }

	        if(typeof json[prop] === 'object') {
	            instance[prop] = MapUtils.deserialize(json[prop], environment, environment[prop]);
	        } else {
	            instance[prop] = json[prop];
	        }
	    }

	    return instance;
	}

	static fromJsonToObj(obj, json){
		for (var prop in json) obj[prop] = json[prop];
			return obj;
	}


}