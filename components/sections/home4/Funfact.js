'use client'
import CounterUp from "@/components/elements/CounterUp"


export default function Funfact(){
    return (
        <> 

        <section className="funfact-section alternat-2 centred pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="count-outer">
                                    <CounterUp end={12} /><span className="symble">k</span>
                                </div>
                                <p>Freelance Workers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="count-outer">
                                    <CounterUp end={95} /><span className="symble">%</span>
                                </div>
                                <p>Jobs Fulfillment Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="count-outer">
                                    <CounterUp end={12} /><span className="symble">k+</span>
                                </div>
                                <p>Jobs Filled</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="count-outer">
                                    <CounterUp end={825} /><span className="symble">+</span>
                                </div>
                                <p>Satisfied Businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
