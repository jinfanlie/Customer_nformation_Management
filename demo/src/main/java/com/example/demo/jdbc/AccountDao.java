package com.example.demo.jdbc;

 
public interface AccountDao {
	//添加 int返回的是添加的记录条数
	public int addAccount(Account account);
	//更新
	public int updateAccount(Account account);
	//删除
	public int deleteAccount(int id);
	
}
