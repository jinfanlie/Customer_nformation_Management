package com.example.demo.jdbc;
 
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
 
public class JdbcTemplateTest {
	/**
	 * 使用execute()方法建表
	 */
	
	public void createTableTest() {
		//加载配置文件
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		//获取JdbcTemplate实例
		JdbcTemplate jdTemplate = (JdbcTemplate) applicationContext.getBean("jdbcTemplate");
		//使用execute()方法执行SQL语句，创建用户账户管理表account
		String sql = "create table account("
				+ "id int primary key auto_increment,"
				+ "username varchar(50),"
				+ "balance double)";
		jdTemplate.execute(sql);
		System.out.println("账户表account创建完成！");
	}
	@Test
	public void addAccountTest() {
		//加载配置文件
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		//获取AccountDao实例
		AccountDao accountDao = (AccountDao) applicationContext.getBean("accountDao");
		//创建Account对象，并向Account对象添加数据
		Account account = new Account();
		account.setUsername("李四");
		account.setBalance(50000.0);
		//执行addAccount()方法，并获取返回结果
		int num = accountDao.addAccount(account);
		if (num>0) {
			System.out.println("成功插入了"+num+"条数据！");
		}else {
			System.out.println("插入失败");
		}
	}
	@Test
	public void updateAccountTest() {
		//加载配置文件
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		//获取AccountDao实例
		AccountDao accountDao = (AccountDao) applicationContext.getBean("accountDao");
		//创建Account对象，并向Account对象添加数据
		Account account = new Account();
		account.setId(1);
		account.setUsername("王五");
		account.setBalance(60000.0);
		//执行updateAccount()方法，并获取返回结果
		int num = accountDao.updateAccount(account);
		if (num>0) {
			System.out.println("成功修改了"+num+"条数据！");
		}else {
			System.out.println("修改失败");
		}
	}
	@Test
	public void deleteAccountTest() {
		//加载配置文件
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		//获取AccountDao实例
		AccountDao accountDao = (AccountDao) applicationContext.getBean("accountDao");
		//执行deleteAccount()方法，并获取返回结果
		int num = accountDao.deleteAccount(2);
		if (num>0) {
			System.out.println("成功删除了"+num+"条数据！");
		}else {
			System.out.println("删除失败");
		}
	}
}