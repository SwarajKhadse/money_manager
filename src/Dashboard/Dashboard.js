import React from 'react'
import "./Dashboard.css"
export default function Dashboard() {

    return (
        <div className='dashboard'>

            {/* HEADER */}

            <div className='dashboard_header'>
                <div className='logo'>
                    <h2>Money Manager</h2>
                </div>
                <div className='user_info'>
                    <div className='user_profile'></div>
                    <div className='user_name'>Aman</div>
                </div>

            </div>

            {/* HEADER ENDS */}


            <div className='row container-1 '>


                <div className='col-6  colum-1'>
                    <div className='money_detail'>
                        <div className='total'>
                            <h4>Total Income  : </h4>
                            <div className='amount'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                4000
                            </div>
                        </div>


                        <div className='total'>
                            <h4>Total Expense  : </h4>
                            <div className='amount'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                5000
                            </div>
                        </div>

                        <div className='total'>
                            <h4>Total Balance  : </h4>
                            <div className='amount'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                5000
                            </div>
                        </div>

                    </div>
                    <div className='money_thing'>
                        <div className='cash_in'>CASH IN</div>
                        <div className='cash_out'>CASH OUT</div>
                    </div>
                </div>


                <div className='col-6 colum-2'>
                    <div className='colum-2_headinng'>
                        <h2>Transactions </h2>
                    </div>
                    <div className='money_transactions'>

                    </div>

                </div>
            </div>


        </div>
    )

  return (
    <div>
      
    </div>
  )

}
