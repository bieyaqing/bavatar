package model;

import java.util.Date;

import org.json.simple.JSONObject;

import system.Config;
import system.Key;

public class Policy {
	private long policyId;
	private String key;
	private String value;
	private Date date;
	
	public Policy() {
		this.date = new Date();
	}
	
	public Policy(String key, String value) {
		this.key = key;
		this.value = value;
		this.date = new Date();
	}

	public long getPolicyId() {
		return policyId;
	}

	public void setPolicyId(long policyId) {
		this.policyId = policyId;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	@SuppressWarnings("unchecked")
	public JSONObject toJson() {
		JSONObject returnJson = new JSONObject();
		
		returnJson.put(Key.KEY, this.key);
		returnJson.put(Key.VALUE, this.value);
		try {
			returnJson.put(Key.DATE, Config.SDF.format(this.date));
		} catch(Exception e) {
			returnJson.put(Key.DATE, this.date);
		}
		
		return returnJson;
	}
}
