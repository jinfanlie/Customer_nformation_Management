package com.example.demo.jdbc;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class Account {

	 @Getter @Setter

	private Integer id;	//账户id,主键自增
	private String username;	//用户名
	private Double balance;

	@Override
	public String toString() {
		return "Account [id=" + id + ", username=" + username + ", balance=" + balance + "]";
	}
}