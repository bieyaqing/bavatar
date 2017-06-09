package ctrl.module;

import org.json.simple.JSONObject;

import system.Key;
import system.Value;

public class PolicyCtrl {
	@SuppressWarnings("unchecked")
	public static JSONObject initialise() {
		JSONObject returnJson = new JSONObject();
		
		try {
			String author = "Bie Yaqing";
			String password = "qwerty123";
			// TODO
			
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject createPolicy(JSONObject inputJson) {
		JSONObject returnJson = new JSONObject();
		
		try {
			// TODO
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject getPolicy(JSONObject inputJson) {
		JSONObject returnJson = new JSONObject();
		
		try {
			// TODO
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject createAllPolicies() {
		JSONObject returnJson = new JSONObject();
		
		try {
			// TODO
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject updatePolicy(JSONObject inputJson) {
		JSONObject returnJson = new JSONObject();
		
		try {
			// TODO
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject deletePolicy(JSONObject inputJson) {
		JSONObject returnJson = new JSONObject();
		
		try {
			// TODO
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		
		return returnJson;
	}
}
