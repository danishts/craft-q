import React, { useState } from "react";

function AddQuoteForm({ isOpen, onClose, onAdd }) {
  const [client, setClient] = useState("");
  const [itemType, setItemType] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!client || !itemType) return;
    onAdd({ client, itemType, status, priority, date });
    setClient("");
    setItemType("");
    setStatus("Pending");
    setPriority("");
    setDate("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 w-[320px] shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">Add Quote</h3>

        <label className="block text-sm mb-2">Client</label>
        <input
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <label className="block text-sm mb-2">Item Type</label>
        <input
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <label className="block text-sm mb-2">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        >
          <option>Pending</option>
          <option>On Route</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <label className="block text-sm mb-2">Priority</label>
        <input
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <label className="block text-sm mb-2">Date</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD/MM/YYYY"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-2">
            Cancel
                  </button>
                  
          <button type="submit" className="px-3 py-2 bg-[#3A2414] text-white rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuoteForm;
