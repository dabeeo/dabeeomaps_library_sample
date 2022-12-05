import styles from '../GetText/GetText.module.scss';

const Events = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>이벤트</div>
        <p>
            Dabeeomaps API에서 사용가능한 Event 목록입니다.
            <br />
            전체 event중 마우스와 연관된 event는 아래 표와 같습니다
        </p>

        <div className={styles.simpleTable}>
            <table>
                <tbody>
                    <tr id="7b04c324-1043-4b1a-9760-9beca94dc4ff">
                        <td className=""></td>
                        <td className="">click</td>
                        <td className="">mouse-enter</td>
                        <td id="T`MY" className="">
                            mouse-leave
                        </td>
                        <td id="\i]R" className="">
                            mouse-over
                        </td>
                        <td id="oII^" className="">
                            mouse-move
                        </td>
                    </tr>
                    <tr id="7de2b9cf-8682-4eed-82bc-755cb9a1afb5">
                        <td id="eg&gt;Q" className="">
                            poi
                        </td>
                        <td id="_:mS" className="">
                            poi-click
                        </td>
                        <td id="zFKA" className="">
                            poi-mouse-enter
                        </td>
                        <td id="T`MY" className="">
                            poi-mouse-leave
                        </td>
                        <td id="\i]R" className="">
                            poi-mouse-over
                        </td>
                        <td id="oII^" className=""></td>
                    </tr>
                    <tr id="dc57ae2c-75e7-4084-8c65-e3b0e9568a8a">
                        <td id="eg&gt;Q" className="">
                            object
                        </td>
                        <td id="_:mS" className="">
                            object-click
                        </td>
                        <td id="zFKA" className="">
                            object-mouse-enter
                        </td>
                        <td id="T`MY" className="">
                            object-mouse-leave
                        </td>
                        <td id="\i]R" className="">
                            object-mouse-over
                        </td>
                        <td id="oII^" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            marker
                        </td>
                        <td id="_:mS" className="">
                            marker-click
                        </td>
                        <td id="zFKA" className=""></td>
                        <td id="T`MY" className=""></td>
                        <td id="\i]R" className=""></td>
                        <td id="oII^" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            void
                        </td>
                        <td id="_:mS" className="">
                            void-click
                        </td>
                        <td id="zFKA" className=""></td>
                        <td id="T`MY" className=""></td>
                        <td id="\i]R" className=""></td>
                        <td id="oII^" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            mouse
                        </td>
                        <td id="_:mS" className="">
                            on-mouse-click
                        </td>
                        <td id="zFKA" className=""></td>
                        <td id="T`MY" className=""></td>
                        <td id="\i]R" className=""></td>
                        <td id="oII^" className="">
                            on-mouse-move
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p>event중 카메라 및 기타 기능과 관련된 이벤트는 아래 표와 같습니다</p>
            <table>
                <tbody>
                    <tr>
                        <td id="eg&gt;Q" className=""></td>
                        <td id="W{]o" className="">
                            changed
                        </td>
                        <td id="mCub" className="">
                            start
                        </td>
                        <td id="Ea|y" className="">
                            end
                        </td>
                        <td id="oII^" className="">
                            move
                        </td>
                        <td id="OaIN" className="">
                            complete
                        </td>
                        <td id="Dz=j" className="">
                            changing
                        </td>
                        <td id="rTT|" className="">
                            map-out
                        </td>
                        <td id="DcYr" className="">
                            map-in
                        </td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            zoom
                        </td>
                        <td id="W{]o" className="">
                            zoom-changed
                        </td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className=""></td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            tilt
                        </td>
                        <td id="W{]o" className="">
                            tilt-changed
                        </td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className=""></td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            rotation
                        </td>
                        <td id="W{]o" className="">
                            rotation-changed
                        </td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className=""></td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            drag
                        </td>
                        <td id="W{]o" className=""></td>
                        <td id="mCub" className="">
                            drag-start
                        </td>
                        <td id="Ea|y" className="">
                            drag-end
                        </td>
                        <td id="oII^" className="">
                            drag-move
                        </td>
                        <td id="OaIN" className=""></td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            control
                        </td>
                        <td id="W{]o" className=""></td>
                        <td id="mCub" className="">
                            control-start
                        </td>
                        <td id="Ea|y" className="">
                            control-end
                        </td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className=""></td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            모의주행 관련
                        </td>
                        <td id="W{]o" className=""></td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className="">
                            navi-complete
                        </td>
                        <td id="Dz=j" className="">
                            floor-changing
                        </td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            mylocation(gps 관련)
                        </td>
                        <td id="W{]o" className=""></td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className="">
                            tracking-move
                        </td>
                        <td id="OaIN" className="">
                            tracking-complete
                        </td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className="">
                            mylocation-map-out
                        </td>
                        <td id="DcYr" className="">
                            mylocation-map-in
                        </td>
                    </tr>
                    <tr>
                        <td id="eg&gt;Q" className="">
                            floor 관련
                        </td>
                        <td id="W{]o" className="">
                            floor-changed
                        </td>
                        <td id="mCub" className=""></td>
                        <td id="Ea|y" className=""></td>
                        <td id="oII^" className=""></td>
                        <td id="OaIN" className="">
                            render-complete
                        </td>
                        <td id="Dz=j" className=""></td>
                        <td id="rTT|" className=""></td>
                        <td id="DcYr" className=""></td>
                    </tr>
                </tbody>
            </table>
            <p></p>
        </div>
        <p>event는 map이 종속된 태그에 등록하셔서 사용하시면 됩니다.</p>

        <code className={styles.code}>const mapContainer = document.getElementById('viewport');</code>
        <br />
        <div className={styles.middleTitle}>click event</div>

        <div className={styles.miniTitle}>poi-click</div>
        <div className={styles.texts}>클릭한 poi의 정보를 return합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("poi-click", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>object-click</div>
        <div className={styles.texts}>클릭한 object의 정보를 return합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("object-click", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>marker-click</div>

        <div className={styles.texts}>클릭한 marker의 정보를 return합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("marker-click", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>void-click</div>
        <div className={styles.texts}>mouse가 오브젝트나 poi가 아닌 빈공간을 클릭시 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("void-click", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>on-mouse-click</div>
        <div className={styles.texts}>mouse가 click될 때 좌표값을 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-click", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>mouse - enter event</div>

        <div className={styles.miniTitle}>poi-mouse-enter</div>
        <div className={styles.texts}>마우스가 poi 위로 들어갈 때 poi 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-enter", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>object-mouse-enter</div>
        <div className={styles.texts}>마우스가 object 위로 들어갈 때 object 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-enter", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>mouse - leave event</div>

        <div className={styles.miniTitle}>poi-mouse-leave</div>
        <div className={styles.texts}>마우스가 poi 를 떠날 때 poi 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-leave", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>object-mouse-leave</div>
        <div className={styles.texts}>마우스가 object를 떠날 때 object 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-leave", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>mouse - over </div>

        <div className={styles.miniTitle}>poi-mouse-over</div>
        <div className={styles.texts}>마우스가 poi 위를 움직일 때 poi 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-over", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>object-mouse-over</div>
        <div className={styles.texts}>mouse가 오브젝트 위를 움직일 때 오브젝트 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-over", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>mouse - move event</div>

        <div className={styles.miniTitle}>on-mouse-move</div>
        <div className={styles.texts}>mouse가 움직일 때 좌표값을 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-move", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>camera event</div>

        <div className={styles.miniTitle}>zoom-changed</div>
        <div className={styles.texts}>줌이 변경될 때 변경된 값을 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("zoom-changed", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>tilt-changed</div>
        <div className={styles.texts}>tilt가 변경될 때 변경된 값을 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("tilt-changed", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>rotation-changed</div>
        <div className={styles.texts}>각도가 변경될 때 변경된 값을 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("rotation-changed", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>control-start</div>
        <div className={styles.texts}>사용자가 지도를 움직이는 시작시점을 알립니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("control-start", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>control-end</div>
        <div className={styles.texts}>사용자가 지도를 움직이는 종료시점을 알립니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("control-end", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>drag event</div>

        <div className={styles.miniTitle}>drag-start</div>
        <div className={styles.texts}>사용자가 지도를 drag시 움직이는 시작시점을 알립니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("drag-start", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>drag-end</div>
        <div className={styles.texts}>사용자가 지도를 drag시 움직이는 종료시점을 알립니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("drag-end", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>drag-move</div>
        <div className={styles.texts}>사용자가 지도를 drag하는 동안 발생합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("drag-move", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>모의주행 관련</div>

        <div className={styles.miniTitle}>navi-complete</div>
        <div className={styles.texts}>모의주행 애니메이션이 완료되었음을 알립니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("navi-complete", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>floor-changing</div>
        <div className={styles.texts}>층이 변경되기 전 현재 층의 정보와 다음 층의 정보를 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("floor-changing", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>내위치 마커 (GPS)</div>

        <div className={styles.miniTitle}>tracking-move</div>
        <div className={styles.texts}>길찾기를 활성화한 후 gps로 위치를 tracking하는 중에 위치가 변경됨에 따라 현재의 경로에 대한 정보를 반환합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("tracking-move", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>tracking-complete</div>
        <div className={styles.texts}>길찾기를 활성화한 후 gps로 위치를 tracking하는 중에 도착지에 도달할 때 이벤트가 발생합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("tracking-complete", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>mylocation-map-out</div>
        <div className={styles.texts}>내 위치 마커가 지도 영역을 벗어난 경우 이벤트가 발생합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("mylocation-map-out", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>mylocation-map-in</div>
        <div className={styles.texts}>내 위치 마커가 지도 영역으로 진입한 경우 이벤트가 발생합니다. </div>
        <code className={styles.code}>{`mapContainer.addEventListener("mylocation-map-in", (e) => console.log(e.detail));`}</code>

        <br />
        <div className={styles.middleTitle}>floor 관련 </div>

        <div className={styles.miniTitle}>floor-changed</div>
        <div className={styles.texts}>층이 변경된 경우 변경된 층의 ID값을 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("floor-changed", (e) => console.log(e.detail));`}</code>

        <div className={styles.miniTitle}>render-complete</div>
        <div className={styles.texts}>층이 다시 그려졌을 때 실행됩니다. 다시 그려진 층의 정보를 반환합니다.</div>
        <code className={styles.code}>{`mapContainer.addEventListener("render-complete", (e) => console.log(e.detail));`}</code>
    </div>
);

export default Events;
