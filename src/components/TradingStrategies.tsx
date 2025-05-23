import React from 'react';
import './TradingStrategies.css';

const TradingStrategies: React.FC = () => {
  return (
    <div className="container">
        <header>
            <h1>ADVANCED TRADING STRATEGIES</h1>
        </header>
        
        <div className="intro">
            Traditional sizing strategies rely on win rate and risk/reward ratio. These advanced strategies incorporate complex financial metrics to provide a probabilistic edge in various market environments.
        </div>
        
        <div className="strategies-grid">
            {/* Strategy 1 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">1</div>
                    <h3 className="strategy-title">Adaptive Volatility Strategy (AVS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Volatility</span>
                    <span className="tag">Momentum</span>
                    <span className="tag">Correlation</span>
                </div>
                <div className="description">
                    Dynamically adjusts position sizing based on market volatility and correlation between assets.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× (1 - <span className="greek">β</span> × <span className="greek">σ</span><sub>relative</sub>)</div>
                        <div className="formula-part">× (1 + <span className="greek">α</span> × Momentum_Score)</div>
                        <div className="formula-part">× (1 - <span className="greek">γ</span> × Corr_Score)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">σ</span><sub>rel</sub></span>
                                    <span className="param-definition">= Current Vol / 90d Avg Vol</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">Mom_Score</span>
                                    <span className="param-definition">= (P - 20d_Avg) / (20d_Avg × 20d_<span className="greek">σ</span>)</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Corr_Score</span>
                                    <span className="param-definition">= Avg correlation with portfolio</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">α,β,γ</span></span>
                                    <span className="param-definition">= Sensitivity (0.5, 0.7, 0.3)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Reduces exposure during high volatility, increases positions on assets with positive momentum, and diversifies by reducing exposure to highly correlated assets.
                    </div>
                </div>
            </div>
            
            {/* Strategy 2 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">2</div>
                    <h3 className="strategy-title">Market Regime Strategy (MRS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Trend</span>
                    <span className="tag">Volatility</span>
                    <span className="tag">Liquidity</span>
                </div>
                <div className="description">
                    Identifies market "regime" and adapts sizing strategy, implementing risk-on/risk-off approach based on market conditions.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× Regime_Multiplier</div>
                        <div className="formula-part">× (1 + <span className="greek">δ</span> × Liquidity_Score)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="param">
                            <span className="param-symbol">Regime_Mult</span>
                            <span className="param-definition">= Based on market conditions:</span>
                        </div>
                        <div className="two-column">
                            <div>
                                <div className="condition">
                                    <span className="condition-value">1.5</span> if (Uptrend & Low_Vol)
                                </div>
                                <div className="condition">
                                    <span className="condition-value">1.2</span> if (Uptrend & High_Vol)
                                </div>
                                <div className="condition">
                                    <span className="condition-value">0.8</span> if (Downtrend & Low_Vol)
                                </div>
                            </div>
                            <div>
                                <div className="condition">
                                    <span className="condition-value">0.5</span> if (Downtrend & High_Vol)
                                </div>
                                <div className="condition">
                                    <span className="condition-value">1.0</span> otherwise
                                </div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">δ</span></span>
                                    <span className="param-definition">= Liquidity sensitivity (0.2)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Adapts to macroeconomic context by increasing exposure in low-volatility bull markets and reducing it in volatile bear markets, while accounting for liquidity.
                    </div>
                </div>
            </div>
            
            {/* Strategy 3 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">3</div>
                    <h3 className="strategy-title">Modified Kelly Strategy (MKS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Kelly</span>
                    <span className="tag">Systemic Risk</span>
                    <span className="tag">Drawdown</span>
                </div>
                <div className="description">
                    Extends classic Kelly formula by integrating systemic risk factors and historical drawdown for optimal capital allocation.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">
                            f* = 
                            <span className="fraction">
                                <span className="numerator">(p × b - q)</span>
                                <span className="fraction-line"></span>
                                <span className="denominator">b</span>
                            </span>
                            <span className="operator">×</span>
                        </div>
                        <div className="formula-part">(1 - <span className="greek">ρ</span> × Systemic_Risk)</div>
                        <div className="formula-part">× (1 - <span className="greek">λ</span> × DD_Ratio)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol">p</span>
                                    <span className="param-definition">= Probability of gain (winrate)</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">q</span>
                                    <span className="param-definition">= Probability of loss (1-p)</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">b</span>
                                    <span className="param-definition">= Average gain/loss ratio</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Sys_Risk</span>
                                    <span className="param-definition">= Corr × Index Vol / Hist Vol</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">DD_Ratio</span>
                                    <span className="param-definition">= Max_DD / Tolerated_DD</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">ρ,λ</span></span>
                                    <span className="param-definition">= Weight factors (0.3, 0.5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Optimizes long-term capital growth while accounting for systemic risk and drawdown history, avoiding over-sizing in unfavorable conditions.
                    </div>
                </div>
            </div>
            
            {/* Strategy 4 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">4</div>
                    <h3 className="strategy-title">Fundamental Divergence Strategy (FDS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Fundamentals</span>
                    <span className="tag">Value</span>
                    <span className="tag">Quality</span>
                </div>
                <div className="description">
                    Adjusts position sizing based on gap between estimated fundamental value and market price, with quality factor weighting.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× (1 + <span className="greek">η</span> × Divergence_Score)</div>
                        <div className="formula-part">× (1 + <span className="greek">θ</span> × Quality_Score)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Div_Score</span>
                                    <span className="param-definition">= (Fund_Value - Price) / Price</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">Fund_Value</span>
                                    <span className="param-definition">= Weighted avg of valuations</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Quality_Score</span>
                                    <span className="param-definition">= Metrics (ROE, Margin, etc.)</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">η,θ</span></span>
                                    <span className="param-definition">= Sensitivity (0.6, 0.4)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Increases exposure to assets undervalued relative to fundamentals with high quality metrics, creating edge based on price-value convergence.
                    </div>
                </div>
            </div>
            
            {/* Strategy 5 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">5</div>
                    <h3 className="strategy-title">Adaptive Time Cycle Strategy (ATCS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Cycles</span>
                    <span className="tag">Seasonality</span>
                    <span className="tag">Temporality</span>
                </div>
                <div className="description">
                    Adjusts position sizing based on identified time cycles and seasonality patterns detected through spectral analysis.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× (1 + <span className="greek">μ</span> × Cycle_Score)</div>
                        <div className="formula-part">× (1 + <span className="greek">ν</span> × Seasonality_Score)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Cycle_Score</span>
                                    <span className="param-definition">= Weighted sum of cycle scores</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">Season_Score</span>
                                    <span className="param-definition">= Hist perf / Avg perf</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">μ,ν</span></span>
                                    <span className="param-definition">= Sensitivity (0.4, 0.3)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Exploits cyclical and seasonal patterns in financial markets, increasing exposure during historically favorable periods and reducing during unfavorable ones.
                    </div>
                </div>
            </div>
            
            {/* Strategy 6 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">6</div>
                    <h3 className="strategy-title">Volatility Asymmetry Strategy (VAS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Implied Volatility</span>
                    <span className="tag">Realized Volatility</span>
                    <span className="tag">Options</span>
                </div>
                <div className="description">
                    Exploits asymmetry between implied and realized volatility to size positions, capitalizing on market mispricing of risk.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× (1 + <span className="greek">ω</span> × Asymmetry_Score)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Asym_Score</span>
                                    <span className="param-definition">= (Impl_Vol - Real_Vol) / Real_Vol</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">Impl_Vol</span>
                                    <span className="param-definition">= Derived from option prices</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol">Real_Vol</span>
                                    <span className="param-definition">= StdDev of returns (20d)</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol"><span className="greek">ω</span></span>
                                    <span className="param-definition">= Sensitivity (0.5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Increases exposure when market overestimates future volatility (high risk premium) and reduces it when market underestimates it.
                    </div>
                </div>
            </div>
            
            {/* Strategy 7 */}
            <div className="strategy-card">
                <div className="strategy-header">
                    <div className="strategy-number">7</div>
                    <h3 className="strategy-title">Dynamic Multi-Factor Strategy (DMS)</h3>
                </div>
                <div className="tags">
                    <span className="tag">Multi-factors</span>
                    <span className="tag">Adaptation</span>
                    <span className="tag">Rotation</span>
                </div>
                <div className="description">
                    Integrates multiple market factors with dynamic weightings based on recent performance, using rolling metrics with time decay.
                </div>
                <div className="formula-container">
                    <div className="formula-title">Formula</div>
                    <div className="formula">
                        <div className="formula-part">Position Size = Capital × Base%</div>
                        <div className="formula-part">× <span className="sigma">Σ</span>(w<sub>i</sub> × F<sub>i</sub>)</div>
                    </div>
                    <div className="formula-components">
                        <div className="where">Where:</div>
                        <div className="two-column">
                            <div>
                                <div className="param">
                                    <span className="param-symbol">F<sub>i</sub></span>
                                    <span className="param-definition">= Normalized factor score</span>
                                </div>
                                <div className="param">
                                    <span className="param-symbol">w<sub>i</sub></span>
                                    <span className="param-definition">= Dynamic factor weight</span>
                                </div>
                            </div>
                            <div>
                                <div className="param">
                                    <span className="param-symbol"><span className="sigma">Σ</span>w<sub>i</sub></span>
                                    <span className="param-definition">= 1 (weights sum to 100%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logic-container">
                    <div className="logic-title">Logic</div>
                    <div className="logic-content">
                        Automatically adapts to factors that work best in current market environment, creating edge based on rotation of dominant factors across cycles.
                    </div>
                </div>
            </div>
        </div>
        
        <div className="recommendations">
            <h2>USAGE RECOMMENDATIONS</h2>
            <div className="recommendations-grid">
                <div className="recommendation-item">
                    <div className="recommendation-icon">1</div>
                    <div className="recommendation-content">
                        <div className="recommendation-title">Strategy Combination</div>
                        <div className="recommendation-text">
                            Combine strategies for robust trading system. Use MRS for overall allocation, then AVS for individual position sizing.
                        </div>
                    </div>
                </div>
                
                <div className="recommendation-item">
                    <div className="recommendation-icon">2</div>
                    <div className="recommendation-content">
                        <div className="recommendation-title">Parameter Calibration</div>
                        <div className="recommendation-text">
                            Calibrate sensitivity parameters (α, β, γ, etc.) based on risk tolerance and specific market characteristics.
                        </div>
                    </div>
                </div>
                
                <div className="recommendation-item">
                    <div className="recommendation-icon">3</div>
                    <div className="recommendation-content">
                        <div className="recommendation-title">Backtesting</div>
                        <div className="recommendation-text">
                            Perform rigorous backtesting across different market periods to validate robustness and adjust parameters.
                        </div>
                    </div>
                </div>
                
                <div className="recommendation-item">
                    <div className="recommendation-icon">4</div>
                    <div className="recommendation-content">
                        <div className="recommendation-title">Progressive Adaptation</div>
                        <div className="recommendation-text">
                            Introduce strategies gradually, starting with small allocations to observe behavior under real conditions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TradingStrategies;
