"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import * as XLSX from "xlsx";

export default function AdminPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApplications();

    // 3초마다 자동 새로고침
    const interval = setInterval(() => {
      fetchApplications();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  async function fetchApplications() {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setApplications(data || []);
    }
  }

  const filteredApplications = useMemo(() => {
    return applications.filter((item) => {
      return (
        item.name?.includes(search) ||
        item.phone?.includes(search)
      );
    });
  }, [applications, search]);

  function downloadExcel() {
    const excelData = filteredApplications.map((item) => ({
      번호: item.id,
      이름: item.name,
      연락처: item.phone,
      희망금액: item.amount,
      신청시간: new Date(item.created_at).toLocaleString("ko-KR"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "신청자목록"
    );

    XLSX.writeFile(
      workbook,
      `goldloan_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  }

  const todayCount = applications.filter((item) => {
    const today = new Date();
    const created = new Date(item.created_at);

    return (
      today.getFullYear() === created.getFullYear() &&
      today.getMonth() === created.getMonth() &&
      today.getDate() === created.getDate()
    );
  }).length;

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        신청자 목록
      </h1>

      {/* 신청 건수 */}
      <div className="flex gap-5 mb-8">

        <div className="bg-blue-600 text-white rounded-xl p-6 w-56">
          <p className="text-sm">총 신청</p>
          <h2 className="text-4xl font-bold">
            {applications.length}건
          </h2>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-6 w-56">
          <p className="text-sm">오늘 신청</p>
          <h2 className="text-4xl font-bold">
            {todayCount}건
          </h2>
        </div>

      </div>

      {/* 검색 + 엑셀 */}
      <div className="flex justify-between items-center mb-6">

        <input
          type="text"
          placeholder="이름 또는 연락처 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-80"
        />

        <button
          onClick={downloadExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          엑셀 다운로드
        </button>

      </div>

      <table className="w-full border border-gray-300">

        <thead className="bg-gray-100">

          <tr>
            <th className="border p-3">번호</th>
            <th className="border p-3">이름</th>
            <th className="border p-3">연락처</th>
            <th className="border p-3">희망금액</th>
            <th className="border p-3">신청시간</th>
          </tr>

        </thead>

        <tbody>

          {filteredApplications.length === 0 ? (

            <tr>
              <td
                colSpan={5}
                className="border p-10 text-center text-gray-500"
              >
                검색 결과가 없습니다.
              </td>
            </tr>

          ) : (

            filteredApplications.map((item) => (

              <tr key={item.id}>

                <td className="border p-3 text-center">
                  {item.id}
                </td>

                <td className="border p-3">
                  {item.name}
                </td>

                <td className="border p-3">
                  {item.phone}
                </td>

                <td className="border p-3">
                  {item.amount}
                </td>

                <td className="border p-3">
                  {new Date(item.created_at).toLocaleString("ko-KR")}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}