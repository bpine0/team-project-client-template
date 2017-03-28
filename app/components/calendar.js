import React from 'react';
import Events from './event-details';

export default class Calendar extends React.Component{
  render() {
    return(
      <div class="calendar">
        <header>
          <button class="arrows">«</button>
          <h2>February 2017   -
            <span style ="font-weight:lighter"> My Events </span>
            <div class="dropdown">
              <span>Filter Events &#9663
              </span>
              <div class="dropdown-content">
                <p>All Events</p>
                <p>My Events</p>
                <p>Athletics</p>
                <p>Arts</p>
                <p>Educational</p>
              </div>
            </div>


          </h2>
          <button class="arrows">»</button>
        </header>
      <table>
        <tr>
          <td>S</td>
          <td>M</td>
          <td>T</td>
          <td>W</td>
          <td>Th</td>
          <td>F</td>
          <td>S</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
        </tr>
        <tr>
          <td>19</td>
          <td>20</td>
          <td class="event">
            21
            <span style="font-size:110%;color:yellow;">&star; </span> </br>
            Supplemental Instruction Review <i> 5pm </i> LRC
          </td>
          <td>22</td>
          <td>23</td>
          <td class="event">
            24
            <span style="font-size:110%;color:yellow;">&star; </span> </br>
            UMass vs. BC Hockey Game <i> 7pm </i> Mullins Center

        </td>
          <td>25</td>
        </tr>
        <tr>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </div>
    )
  }
}
