package com.nhefner.main;

public class Stock { 

    /**
     * @return the change
     */
    public double getChange() {
        return change;
    }

    /**
     * @param change the change to set
     */
    public void setChange(double change) {
        this.change = change;
    }

    /**
     * @return the lastDateTrader
     */
    public String getLastDateTrader() {
        return lastDateTrader;
    }

    /**
     * @param lastDateTrader the lastDateTrader to set
     */
    public void setLastDateTrader(String lastDateTrader) {
        this.lastDateTrader = lastDateTrader;
    }
	
	private String symbol; 
	private double price;
	private long volume;
	private double pe;
	private double eps;
	private double week52low;
	private double week52high;
	private double daylow;
	private double dayhigh;
	private double movingav50day;
	private double marketcap;
	private String name;
	private String currency;
	private double shortRatio;
	private double previousClose;
	private double open;
	private String exchange;
        private double change;
        private String lastDateTrader;
	
	public Stock(String symbol, double price, long volume, double pe, double eps, double week52low,      
					double week52high, double daylow, double dayhigh, double movingav50day, double marketcap, String name, String currency, double shortRatio, double previousClose, double open, String exchange, double change, String lastDateTrader) {	
		this.symbol = symbol; 
		this.price = price;	
		this.volume = volume; 
		this.pe = pe; 
		this.eps = eps; 
		this.week52low = week52low; 
		this.week52high = week52high; 
		this.daylow = daylow; 
		this.dayhigh = dayhigh; 
		this.movingav50day = movingav50day; 
		this.marketcap = marketcap;
		this.name = name;
		this.currency = currency;
		this.shortRatio = shortRatio;
		this.previousClose = previousClose;
		this.open = open;
		this.exchange = exchange;
                this.change = change;
                this.lastDateTrader = lastDateTrader;
	} 
	
	public String getExchange(){
		return this.exchange;
	}
	
	public double getPreviousClose(){
		return this.previousClose;
	}
	
	public double getOpen(){
		return this.open;
	}
	
	public double getShortRatio(){
		return this.shortRatio;
	}
	
	public String getCurrency(){
		return this.currency;
	}
	
	public String getSymbol() { 
		return this.symbol;		
	} 
	
	public double getPrice() { 		
		return this.price;		
	} 
	
	public long getVolume() {    
		return this.volume;     
	} 
 
	public double getPe() {    
		return this.pe;     
	} 
  
	public double getEps() { 
		return this.eps;     
	} 
  
	public double getWeek52low() {    
		return this.week52low;    
	} 
  
	public double getWeek52high() {  
		return this.week52high;    
	} 
  
	public double getDaylow() {    
		return this.daylow;    
	} 
  
	public double getDayhigh() {    
		return this.dayhigh;     
	} 
  
	public double getMovingav50day() {     
		return this.movingav50day;  
	} 
  
	public double getMarketcap() { 
		return this.marketcap;
	} 
	
	public String getName(){
		return this.name;
	}
}
