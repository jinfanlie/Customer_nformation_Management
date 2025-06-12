package com.example.demo.jdbc;

 
import org.springframework.jdbc.core.JdbcTemplate;
 
public class AccountDaoImpl implements AccountDao{
	//声明JdbcTemplate属性及其setter方法
	private JdbcTemplate jdbcTemplate;
 
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	//添加账户    ?为占位符
	public int addAccount(Account account) {
		//定义SQL
		String sql = "insert into account(username,balance)value(?,?)";
		//定义数组来存储SQL语句中的参数
		Object[] objects = new Object[] {
				account.getUsername(),
				
				account.getBalance()
		};
		//执行添加操作，返回的是受SQL语句影响的记录条数
		int num = this.jdbcTemplate.update(sql,objects);
		return num;
	}
	@Override
	public int updateAccount(Account account) {
		//定义SQL
		String sql = "update account set username=?,balance=? where id = ?";
		//定义数组来存储SQL语句中的参数
		Object[] objects = new Object[] {
				account.getUsername(),
				account.getBalance(),
				account.getId()
		};
		//执行更新操作，返回的是受SQL语句影响的记录条数
		int num = this.jdbcTemplate.update(sql,objects);
		return num;
	}
	@Override
	public int deleteAccount(int id) {
		//定义SQL
		String sql = "delete from account where id = ?";
		//执行删除操作，返回的是受SQL语句影响的记录条数
		int num = this.jdbcTemplate.update(sql,id);
		return num;
	}
}
