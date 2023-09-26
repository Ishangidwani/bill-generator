import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    tabno: "2",
    time: "13:36",
    wt: "0",
    pr: "0",
    billno: "180",
    date: "28/04/23",
    phone: '02066819999',
    location: "JEHANGIR HOSPITAL",
    address: "32, SASSOON ROAD PUNE 411001",
    name: 'THE PULSE CAFE',
  }

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="bg-white px-6 py-2 sm:py-32 lg:px-8">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bill Generator</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Atma ko shanti and sukoon milega, free ka bill banake</p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-16  sm:mt-20 d-flex">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                <div className="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                    value={this.state.name}
                    onChange={(e) => this.handleInputChange(e, 'name')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                <div className="mt-2.5">
                  <input type="text" name="last-name"
                    value={this.state.location}
                    onChange={(e) => this.handleInputChange(e, 'location')}
                    id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="date" className="block text-sm font-semibold leading-6 text-gray-900">Date</label>
                <div className="mt-2.5">
                  <input type="text" name="date"
                    value={this.state.date}
                    onChange={(e) => this.handleInputChange(e, 'date')}
                    id="date" autocomplete="date" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="time" className="block text-sm font-semibold leading-6 text-gray-900">Time</label>
                <div className="mt-2.5">
                  <input type="text" name="time"
                    value={this.state.time}
                    onChange={(e) => this.handleInputChange(e, 'time')}
                    id="time" autocomplete="time" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="wt" className="block text-sm font-semibold leading-6 text-gray-900">wt</label>
                <div className="mt-2.5">
                  <input type="text" name="wt"
                    value={this.state.wt}
                    onChange={(e) => this.handleInputChange(e, 'wt')}
                    id="wt" autocomplete="wt" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="nill-no" className="block text-sm font-semibold leading-6 text-gray-900">Bill no</label>
                <div className="mt-2.5">
                  <input type="text" name="wt"
                    value={this.state.billno}
                    onChange={(e) => this.handleInputChange(e, 'billno')}
                    id="bill-no" autocomplete="bill-no" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="table-no" className="block text-sm font-semibold leading-6 text-gray-900">Tab No</label>
                <div className="mt-2.5">
                  <input type="text" name="table-no"
                    value={this.state.tabno}
                    onChange={(e) => this.handleInputChange(e, 'tabno')}
                    id="table-no" autocomplete="table-no" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="pr" className="block text-sm font-semibold leading-6 text-gray-900">PR</label>
                <div className="mt-2.5">
                  <input type="text" name="pr"
                    value={this.state.pr}
                    onChange={(e) => this.handleInputChange(e, 'pr')}
                    id="pr" autocomplete="pr" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="address" className="block text-sm font-semibold leading-6 text-gray-900">Address</label>
                <div className="mt-2.5">
                  <input type="text" name="address"
                    value={this.state.address}
                    onChange={(e) => this.handleInputChange(e, 'address')}
                    id="address" autocomplete="address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" className="sr-only">Country</label>
                    <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                    <span className="sr-only">Agree to policies</span>
                    <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
                <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                  By selecting this, you agree to our
                  <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                </label>
              </div>
            </div>
            <div>
              <div data-v-43c2cdd5="" className="tm_pos_invoice_wrap">
                <div data-v-43c2cdd5="" className="tm_pos_invoice_top">
                  <div data-v-43c2cdd5="" className="tm_pos_company_logo">{this.state.name}</div>
                  <div data-v-43c2cdd5="" className="tm_pos_company_name">{this.state.location}</div>
                  <div data-v-43c2cdd5="" className="tm_pos_company_address">{this.state.address}</div>
                  <div data-v-43c2cdd5="" className="tm_pos_company_name">
                    PH : 02066819999
                  </div>
                </div>
                <div data-v-43c2cdd5="" className="tm_pos_invoice_body">
                  <div data-v-43c2cdd5="" className="tm_pos_invoice_heading"><span data-v-43c2cdd5="">Receipt</span></div>
                  <ul data-v-43c2cdd5="" className="tm_list tm_style1">
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">Date</div>
                        <div>{this.state.date}</div>
                      </div>
                    </li>
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">Tab No.</div>
                        <div>{this.state.tabno}</div>
                      </div>
                    </li>
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">Time</div>
                        <div>{this.state.time}</div>
                      </div>
                    </li>
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">WT.</div>
                        <div>{this.state.wt}</div>
                      </div>
                    </li>
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">Pr.</div>
                        <div>{this.state.pr}</div>
                      </div>
                    </li>
                    <li data-v-43c2cdd5="">
                      <div data-v-43c2cdd5="" className="tm_list_desc">
                        <div className="font-bold">Bill No.</div>
                        <div>{this.state.billno}</div>
                      </div>
                    </li>
                  </ul>
                  <table data-v-43c2cdd5="" className="tm_pos_invoice_table">
                    <thead data-v-43c2cdd5="">
                      <tr data-v-43c2cdd5="">
                        <th data-v-43c2cdd5="">Item</th>
                        <th data-v-43c2cdd5="">Price</th>
                        <th data-v-43c2cdd5="">Qty</th>
                        <th data-v-43c2cdd5="">Total</th>
                      </tr>
                    </thead>
                    <tbody data-v-43c2cdd5="">
                      <tr data-v-43c2cdd5="">
                        <td data-v-43c2cdd5=""></td>
                        <td data-v-43c2cdd5="">₹0</td>
                        <td data-v-43c2cdd5="">0</td>
                        <td data-v-43c2cdd5="">₹</td>
                      </tr>
                    </tbody>
                  </table>
                  <div data-v-43c2cdd5="" className="tm_bill_list">
                    <div data-v-43c2cdd5="" className="tm_bill_list_in">
                      <div data-v-43c2cdd5="" className="tm_bill_title">Sub-Total:</div>
                      <div data-v-43c2cdd5="" className="tm_bill_value">₹ 0</div>
                    </div>
                    <div data-v-43c2cdd5="" className="tm_bill_list_in">
                      <div data-v-43c2cdd5="" className="tm_bill_title">CGST:</div>
                      <div data-v-43c2cdd5="" className="tm_bill_value"> 0% &nbsp; ₹ 0 </div>
                    </div>
                    <div data-v-43c2cdd5="" className="tm_bill_list_in">
                      <div data-v-43c2cdd5="" className="tm_bill_title">SGST:</div>
                      <div data-v-43c2cdd5="" className="tm_bill_value"> 0% &nbsp; ₹ 0 </div>
                    </div>
                    <div data-v-43c2cdd5="" className="tm_invoice_seperator"></div>
                    <div data-v-43c2cdd5="" className="tm_bill_list_in">
                      <div data-v-43c2cdd5="" className="tm_bill_title">Mode: </div>
                      <div data-v-43c2cdd5="" className="tm_bill_value">Total: ₹ </div>
                    </div>
                  </div>
                  <div data-v-43c2cdd5="" className="tm_pos_sample_text">**SAVE PAPER SAVE NATURE !!
                    YOU CAN NOW CALL US ON 1800 226344 (TOLL-FREE) FOR QUERIES/COMPLAINTS.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default App;
